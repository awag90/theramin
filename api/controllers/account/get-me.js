module.exports = {


  friendlyName: 'Get Session',


  description: 'Returns Session-Object',


  inputs: {
  },


  exits: {
    success: {

    },
  },


  fn: async function () {
    let result = []
    if (this.req.me) {
      result.push(this.req.me)
    }
    return result
  }

};