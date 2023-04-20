import PouchDB from 'pouchdb';
import { browser } from '$app/environment';

export const localDB = browser ? new PouchDB('news') : null;
