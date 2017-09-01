// link: https://randomuser.me/api/?results=5&inc=name,gender,nat&noinfo

var axios = require('axios');

const RANDOM_USER_URL= 'https://randomuser.me/api/?inc=name,gender,nat&noinfo';

module.exports = {
    getEmployee: function () {
        var requestUrl='$(RANDOM_USER_INFO)';

        return axios.get(requestUrl).then(function (res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.results.name.first;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}