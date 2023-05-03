import PouchDB from 'pouchdb';
import { browser } from '$app/environment';

export const localDB = browser ? new PouchDB('news') : null;

export const remoteDB = browser ? new PouchDB('http://localhost:5984/news') : null;
