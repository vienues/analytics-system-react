const Rx = require('rxjs');


const o = Rx.Observable.interval(1000).takeUntil(Rx.Observable.timer(5000))

o.subscribe((v) => console.log("meow", v))


function createRequestContext() {
  const channel = new Rx.BehaviorSubject()

  const scanner = channel.scan(({ channels, requests }, request) => {
    const id = request.id;

    requests[id] = requests[id] || new Rx.BehaviorSubject();
    channels[id] = channels[id] || new Rx.BehaviorSubject();

    acc[request.id].next(request)

    return {
      channels,
      requests
    }
  }, {
    channels: [],
    requests: []
  })

  return {
    stock(request) {
      channel.next(request)
    }
  }
}


// const iex = createRequestContext();
//
// iex.stock({
//   id: 'aapl',
//   chart: {
//     range: '1m'
//   },
//
//
//
// })

const a = new Rx.BehaviorSubject()

a.subscribe((v) => console.log("sub0", v))
a.next("how")
a.subscribe((v) => console.log("sub1", v))
a.next("why")
a.subscribe((v) => console.log("sub2", v))

a.asObservable().toPromise().then((v) => console.log("promise1", v))
