// mySQL
const mysql = require("mysql");
const config = require("../config/default.json");
// Dùng Pool để khỏi quan tâm việc đóng ngắt kết nối
const pool = mysql.createPool(config.mysql);
module.exports = {
  // dùng Promise
  load: function (sql) {
    return new Promise(function (fn_done, fn_fail) {
      pool.query(sql, function (error, results, fields) {
        if (error) {
          return fn_fail(error);
        }

        fn_done(results);
      });
    });
  },
  // load: function (sql, fn_done, fn_fail) {
  //   var cn = mysql.createConnection(config.mysql);
  //   cn.connect();
  //   cn.query(sql, function (error, results, fields) {
  //     if (error) {
  //       cn.end();
  //       fn_fail(error);
  //       return;
  //     }
  //     fn_done(results);
  //     cn.end();
  //   });
  // },
};
