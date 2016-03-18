import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import { contentHeaders } from '../common/headers';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';// full library quite big
declare var CryptoJS: any;

@Injectable()
export class DataService {
  constructor(private http:Http) {
  }
  serverurl = 'http://pump.cloudapp.net:81/';
  wytoken = 'notloggedin';
  user = {};
  data = [];
  codetree: any;

  login(username, password) {
    var passhash = CryptoJS.SHA1(password).toString();
    let url = this.serverurl + 'login/'+ username.toUpperCase() +'/'+ passhash +'';
    let login = this.http.get(url).map(res => res.json()).subscribe(
    data => {
      this.user = data;
      this.wytoken = data.token;
      localStorage.setItem('wytoken', data.token);
      localStorage.setItem('user', data);
      console.log('logged in ok');
    },
    err => {
      alert(err.text());
      console.log(err.text());
    });
    return login
  }

  getData(query) {
    return Promise.resolve('');
  }
  // See the "Take it slow" appendix
  getDataSlowly() {
    return new Promise<any[]>(resolve =>
      setTimeout(()=>resolve(), 2000) // 2 seconds
    );
  }

  crypttest(event, username, password) {
    event.preventDefault();
    var data = [{id: 1, foo: 'bar'}]
    var secret = 'secret key 123';
    // Encrypt
    var encryptData = CryptoJS.AES.encrypt(JSON.stringify(data), secret);
    var encryptText = encryptData.toString();
    // Decrypt
    var decryptBytes  = CryptoJS.AES.decrypt(encryptText, secret);
    var decryptData = JSON.parse(decryptBytes.toString(CryptoJS.enc.Utf8));
    var zog = CryptoJS.AES.encrypt("12345", "Key").toString();
    var zog1 = CryptoJS.AES.decrypt(zog, "Key").toString();
    var zog2 = zog1.toString(CryptoJS.enc.Utf8);

  }

  get(z) {
      if (!z.fields) {
          z.fields = {};
      }
      if (!z.order) {
          z.order = { _id: 1 };
      }
      if (!z.limit) {
          z.limit = 5000;
      }

      var url = this.serverurl + '/api/Find';
      var data = { 'query': z };
      var headers = {
          'query': JSON.stringify(z),
          "Content-Type": "application/json",
          "wytoken": this.wytoken // no token, no data ☻
      };
      let get = this.http.put(url,'',headers).map(res => res.json()).subscribe(
      data => {
        this.data = data;
        console.log('got data');
      },
      err => {
        alert(err.text());
        console.log(err.text());
      });
      return get;
  }
  put(query, data) {
    var x = this.putit(query, data, '/api/save_id');
    return x;
  }
  agg(query, data) { // data = { 'query': z }
    var x = this.putit(query, data, '/api/agg');
    return x;
  }
  exec(query, data) { // data = { }
    var x = this.putit(query, data, '/api/exec');
    return x;
  }
  email(query, data) { // data = { }
    var x = this.putit(query, data, '/api/sendEmail');
    return x;
  }
  next(query, data) { // data = { }
    var x = this.putit(query, data, '/api/next');
    return x;
  }
  documentstatus(query, data) { // data = { }
    var x = this.putit(query, data, '/api/documentstatus');
    return x;
  }
  mailmerge(query, data) { // data = { }
    var x = this.putit(query, data, '/api/mailmerge');
    return x;
  }
  changepassword(query, data) { // data = { }
    var x = this.putit(query, data, '/api/changepassword');
    return x;
  }

  putit(query, data, service) {
      var url = this.serverurl + service;
      var headers = {
          'query': JSON.stringify(query),
          "Content-Type": "application/json",
          "wytoken": this.wytoken // no token, no data ☻
      };
      let put = this.http.put(url,data,headers).map(res => res.json()).subscribe(
      data => {
        this.data = data;
        console.log('put data');
      },
      err => {
        alert(err.text());
        console.log(err.text());
      });
      return put;
  }

  getLookups (id) {
      var ret = [];
      if (this.codetree) {
          var reta = getCodes(id, this.codetree.children).children;
          if (reta) {
              reta.forEach(function (a) {
                  ret.push(a);
              });
          }
      }
      return ret;

      // walk the tree
      function getCodes(id, children: any[]) {
          var ret:any;
          ret = {};
          for (var i = 0; i < children.length; i++) {
              if (ret.id) return ret;
              if (children[i].id === id) {
                  ret = { id: children[i].id, name: children[i].name, children: children[i].children, codeval: children[i].codeval };
                  return ret;
              }
              ret = getCodes(id, children[i].children)
          }
          return ret;
      }
  }

  isThere(dataName) {
      var ret = false;
      if (typeof (Storage) === "undefined") {
          return ret;
      }
      if (localStorage[dataName] && localStorage[dataName] != "undefined") {
          ret = true;
      }
      return ret;
  }

  isFresh(dataName, secs) { // < secs old
      var ret = false;
      if (typeof (Storage) === "undefined") {
          return ret;
      }
      if (!this.isThere(dataName))
          return ret;

      //var saved = localStorage[dataName];
      var saved = JSON.parse(localStorage[dataName]).created;
      if (saved) {
          var now = new Date();
          var diff = now.valueOf() - new Date(saved).valueOf();
          if (diff < secs * 1000) // in ms
          {
              ret = true;
          }
      }
      return ret;
  }

  load(dataName) {
      var ret:any;
      ret = {};
      if (localStorage[dataName]) {
          var sdata = localStorage[dataName];
          ret = JSON.parse(sdata);
      }
      return ret.data;
  }

  save(dataName, data) {
      //data.savedd = new Date(); // mark with todays datetime
      var d = {created: new Date(), data: data};
      var sdata = JSON.stringify(d);
      localStorage[dataName] = sdata;
      //var savedd = new Date(); // mark with todays datetime
      //localStorage[dataName + "Saved"] = savedd;
      return;
  }

  clearOne(dataName) {
      if (typeof (Storage) === "undefined") {
          return;
      }
      localStorage.removeItem(dataName); // remove one
      //localStorage.removeItem(dataName + "Saved");
      return;
  }

  clearAll() {
      if (typeof (Storage) === "undefined") {
          return;
      }
      localStorage.clear(); // clear the lot
      return;
  }

  areWeOnline() {
      if (navigator.onLine) {
          return true;
      } else {
          return false;
      }
  }

}
