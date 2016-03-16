import { Headers } from 'angular2/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json, text/plain');
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Accept-Encoding', 'gzip, deflate, sdch');
contentHeaders.append('Accept-Language', 'en-US,en;q=0.8');
contentHeaders.append('Connection', 'keep-alive');
contentHeaders.append('Host', 'pump.cloudapp.net:81');
contentHeaders.append('Origin', 'http://pump.cloudapp.net');
