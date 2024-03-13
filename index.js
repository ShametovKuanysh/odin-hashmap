class HashMap {
    #buckets
    #loadfactor
    constructor() {
        this.#buckets = []
        this.#buckets.length = 8
        this.#loadfactor = 0
    }

    hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 41;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#buckets.length;
        }

        return hashCode;
    }

    set = (key, value) => {
        const hash = this.hash(key)
        if (0.75 < this.#loadfactor / this.#buckets.length ){
            this.increase()
        }
        this.#buckets[hash] = {key,value}
        this.#loadfactor++
    }

    increase = () => {
        this.#buckets.length = this.#buckets.length * 2
    }

    get = (key) => {
        const hash = this.hash(key)
        return this.#buckets[hash] ? this.#buckets[hash].value : null
    }

    has = (key) => {
        const hash = this.hash(key)
        return this.#buckets[hash] ? true : false
    }

    remove = (key) => {
        const hash = this.hash(key)
        if (this.#buckets[hash]) {
            this.#buckets[hash] = null 
            return true
        }
        return false
    }

    length = () => {
        console.log(this.#buckets.length)
        return this.#buckets.filter(data => data).length
    }

    clear = () => {
        this.#buckets = []
    }

    keys = () => {
        return this.#buckets.filter(data => {return data?.key})
    }

    values = () => {
        return this.#buckets.filter(data => {return data?.value})
    }

    entries = () => {
        return this.#buckets.flat().map(data => [data.key, data.value])
    }
}

class HashSet {
    #buckets
    #loadfactor
    constructor() {
        this.#buckets = []
        this.#buckets.length = 8
        this.#loadfactor = 0
    }

    hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 41;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#buckets.length;
        }

        return hashCode;
    }

    set = (key) => {
        const hash = this.hash(key)
        if (0.75 < this.#loadfactor / this.#buckets.length ){
            this.increase()
        }
        this.#buckets[hash] = key
        this.#loadfactor++
    }

    increase = () => {
        this.#buckets.length = this.#buckets.length * 2
    }

    get = (key) => {
        const hash = this.hash(key)
        return this.#buckets[hash] ? this.#buckets[hash] : null
    }

    has = (key) => {
        const hash = this.hash(key)
        return this.#buckets[hash] ? true : false
    }

    remove = (key) => {
        const hash = this.hash(key)
        if (this.#buckets[hash]) {
            this.#buckets[hash] = null 
            return true
        }
        return false
    }

    length = () => {
        console.log(this.#buckets.length)
        return this.#buckets.filter(data => data).length
    }

    clear = () => {
        this.#buckets = []
    }

    keys = () => {
        return this.#buckets.filter(data => {return data})
    }

    entries = () => {
        return this.#buckets.flat()
    }
}




const hh = new HashMap()

console.log(hh.length())
console.log(hh.set('KK', 23))
console.log(hh.set('qqq', 23))
console.log(hh.set('wwww', 23))
console.log(hh.set('eeee', 23))
console.log(hh.set('rrrrr', 23))
console.log(hh.set('tttttt', 23))
console.log(hh.set('yyyyyyy', 23))
console.log(hh.set('uuuuuuuu', 23))
console.log(hh.set('aaaxzas', 123))
console.log(hh.set('aaawqeas', 234))
console.log(hh.entries())
console.log(hh.length())


const hs = new HashSet()

console.log(hs.length())
console.log(hs.set('KK'))
console.log(hs.set('qqq'))
console.log(hs.set('wwww'))
console.log(hs.set('eeee'))
console.log(hs.set('rrrrr'))
console.log(hs.set('tttttt'))
console.log(hs.set('yyyyyyy'))
console.log(hs.set('uuuuuuuu'))
console.log(hs.set('aaaxzas'))
console.log(hs.set('aaawqeas'))
console.log(hs.entries())
console.log(hs.length())
