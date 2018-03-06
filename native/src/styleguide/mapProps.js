import _ from 'lodash'
import warning from 'warning'

// Map component props to css values
export const mapProps = map => {
  if (_.isFunction(map)) {
    map = map()
  }

  map = _.map(map, (mapValue, prop) => onProp(prop, mapValue))

  return props => {
    // inception much?
    if (props.mapProps != null) {
      props = {
        ...props,
        ...(_.isFunction(props.mapProps) ? props.mapProps(props) : props.mapProps),
      }
    }

    return map.reduce((acc, select) => {
      const value = select(props)
      if (value != null) {
        acc.push(value)
      }
      return acc
    }, [])
  }
}

// Map a single component prop to a css value (the bread and butter of mapProps)
export const onProp = (prop, mapValue) => {
  const { selectPropValue, selectThemeValue } = createSelectors(prop, mapValue)

  return props => {
    if (selectPropValue(props) != null) {
      return selectThemeValue(props)
    }
  }
}

// Map default css for True or null component props
export const mapDefaultProps = map => {
  if (_.isFunction(map)) {
    map = map()
  }

  map = _.map(map, (mapValue, prop) => defaultProp(prop, mapValue))

  return props => map.map(select => select(props))
}

// Return default css for True or null prop
export const defaultProp = (prop, mapValue) => {
  const { selectPropValue, selectThemeValue } = createSelectors(prop, mapValue)

  return props => {
    const propValue = selectPropValue(props)
    if (propValue == null || propValue === true || _.isString(propValue) || _.isNumber(propValue)) {
      return selectThemeValue(props)
    }
  }
}

// Select css given by
//  - mapValue[props[prop]]
//  - mapValue(props[prop], prop, props)
//  - mapValue
//  - props[prop]
const createSelectors = (prop, mapValue) => {
  const propPath = _.toPath(prop)

  const fn = _.isFunction(mapValue) && mapValue
  const obj = _.isPlainObject(mapValue) && mapValue

  const selectPropValue = props => {
    if (propPath.length === 1) {
      return props[propPath[0]]
    }

    for (let i = 0, val = props; i < propPath.length; i++) {
      val = val != null ? val[propPath[i]] : val
    }

    return val
  }

  const selectThemeValue = props => {
    let propValue = selectPropValue(props)

    /**
     * The propValue may be True or False
     * @example
     <StyledComponent
     hide={!visible}
     />
     */
    if (propValue === false) {
      return null
    }

    /**
     * The mapValue may be a function
     * @example
     mapProps({
                color: (propValue, propName, ownProps) =>
                    css`color: ${propValue}`
            })
     */
    if (fn) {
      return fn(propValue, prop, props)
    }

    /**
     * The mapValue may be an object
     * @example
     mapProps({
                intent: {
                    alert: css`color: magenta`,
                    success: css`color: green`,
                    default: css`color: blue`,
                }
            })
     */
    if (obj) {
      if (_.isFunction(propValue)) {
        propValue = propValue(props, prop, mapValue)
      }

      const { [propValue]: mapped, default: defaulted } = mapValue

      return (
        (propValue !== 'default' && mapped) ||
        (defaulted && (_.isFunction(defaulted) ? defaulted(propValue, prop, props) : defaulted)) ||
        warning(false, `"${prop}" does not have "${propValue}" ${JSON.stringify(mapValue, null, 4)}`)
      )
    }

    /**
     * When mapValue isn't True then the mapValue is the result
     * @example
     mapProps({
                block: css`
                    display: block;
                `
            })
     */
    if (mapValue !== true) {
      return mapValue
    }

    /**
     * If the mapValue is true then the propValue is css
     * @example
     <StyledComponent
     position={css`
                    transform: translate(${x}, ${y})
                `}
     />
     */
    return propValue
  }

  return {
    selectPropValue,
    selectThemeValue,
  }
}

export default mapProps
