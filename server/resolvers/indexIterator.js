const max = 66;
const min = 62;

const randomPrice = () => (Math.random() * (max - min) + min).toFixed(2)

const gen = () => new Promise((resolve)=>{
  setTimeout(()=>{}, 1000)
})

setTimeout(() => {
  pubsub.publish('latestIndex', {
    indices: [{
      id: 'DOWJONES',
      name: "Dow Jones",
      change: randomPrice(),
      volume: randomPrice(),
    }]
  })
}, 1000)

