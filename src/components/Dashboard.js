import React, { Component } from 'react'
import './Dashboard.css';


class Dashboard extends React.Component {
   constructor(props) {
      super(props) 
      this.state = { 
        user:[{
            id:1,
            name:"test1",
            gender:"male",
            email: "test1@gmail.com",
            phoneNo: "9415346313"
       },
       {
            id:2,
            name:"test2",
            gender:"male",
            email: "test2@gmail.com",
            phoneNo: "9415346314"
       },
       {
            id:3,
            name:"test3",
            gender:"male",
            email: "test3@gmail.com",
            phoneNo: "9415346315"
       },
       {
            id:4,
            name:"test4",
            gender:"male",
            email: "test4@gmail.com",
            phoneNo: "9415346316"
       },
       {
            id:5,
            name:"test5",
            gender:"male",
            email: "test5@gmail.com",
            phoneNo: "9415346317"
       },
       {
            id:6,
            name:"test6",
            gender:"female",
            email: "test6@gmail.com",
            phoneNo: "9415346318"
       },
       {
        id:5,
        name:"test5",
        gender:"male",
        email: "test5@gmail.com",
        phoneNo: "9415346317"
   },
   {
        id:6,
        name:"test6",
        gender:"female",
        email: "test6@gmail.com",
        phoneNo: "9415346318"
   },{
    id:5,
    name:"test5",
    gender:"male",
    email: "test5@gmail.com",
    phoneNo: "9415346317"
},
{
    id:6,
    name:"test6",
    gender:"female",
    email: "test6@gmail.com",
    phoneNo: "9415346318"
},]
      }
   }

   tableBody() {
    return this.state.user.map((user) => {
       const { id, name, gender, email, phoneNo } = user 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{gender}</td>
             <td>{email}</td>
             <td>{phoneNo}</td>
          </tr>
       )
    })
 }

 tableHeader() {
    let header = Object.keys(this.state.user[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

   render() { 
      return (
         <div>
            <table id='userTable'>
               <tbody>
                  <tr>{this.tableHeader()}</tr>
                  {this.tableBody()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Dashboard;