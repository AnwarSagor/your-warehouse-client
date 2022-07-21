import './OtherPage.css'
import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs-container' className='container'>
            <p><strong>1. Difference between `javascript` and `nodejs`?</strong>
                <br /> A popular lightweight, object-oriented scripting language is Javascript. Node.js is regarded as a language for browsers.
                Javascript is utilized in the creation of mobile apps and games as well as dynamic HTML pages with interactive effects on websites. Javascript just allows for web browser execution and running of the code. The code is run and executed outside of the browser using Node.js. It can be applied to server-side and client-side programming.
                NodeJS is a Javascript runtime environment, whereas Javascript is a computer language used to create scripts for websites. NodeJS is primarily utilized on the server-side, whereas Javascript is primarily used on the client-side. Javascript has the ability to add HTML and interact with the DOM, however Node.js is unable to add HTML tags. Node.js is used for server-side programming, while Javascript is utilized for frontend development. RamdaJS, TypedJS, and other javascript frameworks are a few examples. Lodash, express, and other Node.js modules are a few. Importing these modules from npm is required. While Nodejs is created in C, C++, and Javascript, ECMA script uses the improved V8 engine from Chrome, which was written in C++.
            </p>
            <p><strong>2. Differences between `sql` and `nosql` databases.</strong>
                <br />
                (1)	In contrast to NoSQL databases, which feature dynamic schemas for unstructured data, SQL databases employ structured query language and have a preset schema.
                (2)	While NoSQL databases are horizontally scalable, SQL databases are scalable vertically.
                (3)	NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based.
                (4)	NoSQL databases are better for unstructured data like documents or JSON, whereas SQL databases are better for multi-row transactions.
                (5)	While NoSQL databases have dynamic schema, SQL databases have fixed, static, or predetermined schema.
                (6)	NoSQL databases are the greatest options for hierarchical data storage, whereas NoSQL databases are not suitable.
                (7)	Complex queries work best with SQL databases; they don't work as well with NoSQL databases.
                (8)	NoSQL follows CAP, while SQL adheres to the ACID property (consistency, availability, partition tolerance).
                (9)	MySQL, PostgreSQL, Oracle, MS-SQL Server, and more are examples of SQL. MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc. are some examples of noSQL.
            </p>
            <p><strong>3. What is the purpose of `jwt` and how does it work?</strong>
                <br /> The purpose of JWT: Authenticating data and securely transmitting information between parties as JSON objects are the goals of JWT. JWT is not encrypted; it is signed and encoded.
                It is small, readable, and digitally signed by the Identity Provider using either a private key or a public key pair. Other parties can therefore confirm the integrity and authenticity of the token.
                JWT is a stateless, token-based authentication method. The server doesn't have to totally rely on a datastore (database) to store session data because it is a client-side-based stateless session.
                <br />How it works: JWTs include a collection of claims that are used to send data between two parties. A claim could specify who issued the token, its expiration date, or the permissions that the client has been given.
                Three sections of a string called a JWT are separated by dots (.) and serialized with base64. The JWT appears something like this in compact serialization, the most used serialization format: xxxxx.yyyyy.zzzzz.

                Once decoded, it will provide two JSON strings:
                1.	The header and the payload.
                2.	The signature.
                The type of token, in this example a JWT, and the signing technique are both contained in the JOSE (JSON Object Signing and Encryption) header.
                The assertions are in the payload. To keep the JWT small, this is shown as a JSON string that typically only has a dozen fields. The server often uses this data to confirm that the user has authorization to carry out the action they are seeking.

                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as a bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. Some are more common than others.
                The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                For a JWT, there are no required claims, although any overlaying standards may require claims. For instance, iss, sub, aud, and exp are required when utilizing JWT as a bearer access token with OAuth2.0. More people encounter some than others.
                The token can't have been changed, thanks to the signature. With a secret that is known to both the issuer and the receiver, or with a private key that is known only to the sender, the party that creates the JWT signs the header and payload. The receiving party checks that the header and payload match the signature before using the token.
            </p>
        </div>
    );
};

export default Blogs;