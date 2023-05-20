/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZPxHC7dqb9syMvmIr4INGXOt_naMJHA4',
  authDomain: 'expense-tracker-1597e.firebaseapp.com',
  projectId: 'expense-tracker-1597e',
  storageBucket: 'expense-tracker-1597e.appspot.com',
  messagingSenderId: '325003886764',
  appId: '1:325003886764:web:3f15772e410010d4a6df09',
  measurementId: 'G-119HQDC9WM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
