const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const functionCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < functionCollection.length; i++)
        callback(functionCollection[i])

        return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

        const newArray = []

        for (let i = 0; i<collection.length; i++)
        newArray.push(callback(collection[i]))

        return newArray
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice(0)

      if (!acc) {
        acc = collection[0]
        newCollection = newCollection.slice(1)
      }

      for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
      }

      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)) {
      collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++) 
        if (predicate(collection[i])) {
          return collection[i]
      }
    },

    filter: function(collection, predicate) {
      if(!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      const newArray = []

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArray.push(collection[i])
        }
      }
      return newArray

    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, i=false) {
      return (i) ? collection.slice(0, i) : collection[0]
    },

    last: function(collection, i=false) {
      return (i) ? collection.slice(collection.length-i, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const falseValue = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(i => !falseValue.has(i))
    },

    sortBy: function(array, callback) {
      const newArray = array.slice(0)
      return newArray.sort(function(a, b) {
       return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow) {
      // console.log(shallow)
      let newArray = []
      for (let val of array) {
        if (shallow) {
          if (Array.isArray(val)) {
            for (let i of val) {
              newArray.push(i)
            }
          } else {
            newArray.push(val)
          }
        }
        return newArray
      } else {
      for (let val of array) {
       if (!Array.isArray(val)) {
         newArray.push(val)
       } else if (Array.isArray(val)) {
        for (let i of val ) {
          newArray.push(i)
        }
       }
      }
    }
      return newArray
    },


    functions: function() {

    },


  }
})()

fi.libraryMethod()
