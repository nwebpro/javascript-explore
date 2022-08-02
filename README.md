:coffee: &emsp;Connect with me!

[![Facebook Badge](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/abnaeembsc) [![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/developernaeem/) [![Instagram Badge](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/nwebpro) [![Twitter Badge](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/developernaeem) [![Mail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abnaeem.bsc@gmail.com)

## জাভাস্ক্রিপ্ট কি?
যদি খুব সহজে বলি তাহলে জাভাস্ক্রিপ্ট  ইন্টারনেটে ব্যবহৃত সবচেয়ে জনপ্রিয় স্ক্রিপ্টিং ল্যাংগুয়েজ। জাভাস্ক্রিপ্ট হল একটি ক্লায়েন্ট সাইড স্ক্রিপ্টিং বা ব্রাউজার স্ক্রিপ্টিং ল্যাংগুয়েজ। সেই সাথে জাভাস্ক্রিপ্ট একটি ওবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং ভাষা। এতে আছে ডেটা টাইপ, অপারেটর, গুরুত্বপূর্ণ কিছু অবজেক্ট  আর ফাংশন বা মেথড।

## জাভাস্ক্রিপ্ট কিভাবে কাজ করে?
যখন JavaScript ফাইলটি ব্রাউজারে লোড করা হয়, তখন JavaScript ইঞ্জিন ফাইলের প্রতিটি লাইনকে উপরে থেকে নীচে চালাবে। এটি একটি interpreted programming language তাই সোর্স কোড এক্সিকিউশনের আগে বাইনারি কোডে কম্পাইল করা হয় না। জাভাস্ক্রিপ্ট ইঞ্জিন কোড লাইন থেকে লাইন পার্স করবে, এটিকে মেশিন কোডে রূপান্তর করবে এবং তারপর এটি কার্যকর করবে। জাভাস্ক্রিপ্ট ইঞ্জিন হল একটি কম্পিউটার প্রোগ্রাম যা জাভাস্ক্রিপ্ট কোড কার্যকর করে। জাভাস্ক্রিপ্ট ইঞ্জিনগুলি আজকের সমস্ত আধুনিক ব্রাউজারে অন্তর্নির্মিত, প্রতিটি ব্রাউজারের নিজস্ব জাভাস্ক্রিপ্ট ইঞ্জিন আছে কিন্তু সবচেয়ে পরিচিত ইঞ্জিন হল Google এর V8।

যেকোনো জাভাস্ক্রিপ্ট ইঞ্জিনে সর্বদা একটি কল স্ট্যাক এবং একটি memory heap থাকে। কল স্ট্যাক হল যেখানে আমাদের কোড আসলে কার্যকর করা হয়। তারপর memory heap হল একটি অসংগঠিত মেমরি পুল যা আমাদের অ্যাপ্লিকেশনের প্রয়োজনীয় সমস্ত বস্তু সংরক্ষণ করে।

## ভেরিয়েবল কি?
ভেরিয়েবল বলতে এমন কিছুকে বোঝানো হয়ে থাকে যার মান সময়ের সাথে সাথে বদলানো যায়। যার মান সময়ের সাথে সাথে বিভিন্ন ভাবে প্রভাবিত হতে পারে এবং গাণিতিক মান কিংবা কোন কিছু প্রকাশ করার ক্ষেত্রে ব্যবহার করা যেতে পারে। ভেরিয়েবল হচ্ছে কম্পিউটার মেমোরি একটি নির্দিষ্ট জায়গা যেখানে বিভিন্ন মান সংরক্ষণ করে রাখা যায় এবং প্রয়োজন অনুযায়ী ব্যবহার করা যায়।

## জাভাস্ক্রিপ্ট ভেরিয়েবল কিভাবে ডিক্লেয়ার করে
JavaScript এ variable declare করার জন্য var কীওয়ার্ড এর মতোই let নামে আরেকটি keyword আছে , যার কাজ হচ্ছে variable টিকে function scope বা global scope এর পরিবর্তে block scope { }হিসেবে ব্যবহার করা যায়। অর্থাৎ আপনি চাইলে একই কোড পেজে অথবা একই ফাঙ্কশনের মধ্যে block দিয়ে একাধিক variable declare করতে পারেন। আর let কীওয়ার্ড টি ECMAScript 2015 অর্থাৎ ES6 থেকে JavaScript এ অন্তর্ভুক্ত হয়।

- Variable Declare
    ```sh
    var name = 'Ab Naeem';
    var _name = 'Ab Naeem';
    var fullName = 'Ab Naeem';
    ```

### ভ্যারিয়েবল লেখার জন্য যা যা ব্যবহার করতে পারবেন এবং পারবেন না।
- a হতে z অথবা A হতে Z পর্যন্ত যেকোন বর্ন ব্যবহার করা যাবে
- ডিজিট ব্যবহার করতে পারবেন তবে শুরুতে না
- underscore ব্যবহার করতে পারবেন তবে space ব্যবহার করতে পারবেন না
- কোন কীওয়ার্ড ব্যবহার করতে পারবেন না