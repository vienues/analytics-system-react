export function withCancel(asyncIterator: AsyncIterator<unknown, any, undefined>, onCancel: () => void) {
    const asyncReturn = asyncIterator.return;
  
    asyncIterator.return = () => {
      onCancel();
      return asyncReturn ? asyncReturn.call(asyncIterator) : Promise.resolve({ value: undefined, done: true });
    };
  
    return asyncIterator;
  }