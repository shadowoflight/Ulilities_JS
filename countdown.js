import React, { Component } from 'react'

 export default class Timer extends Component {
     state = {
         hours: 2,
         minutes: 0,
         seconds: 0,
     }
 
     componentDidMount() {
         this.myInterval = setInterval(() => {
             const { hours,seconds, minutes } = this.state
 
             if (seconds > 0 && minutes >0 ) {
                 
                 this.setState(({ seconds }) => ({
                     seconds: seconds - 1
                 }))
             }
             else if (seconds === 0 && minutes >0 ) {
                 
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
            else if (minutes === 0 && hours >0 ) {
                 
                this.setState(({ hours }) => ({
                    hours: hours - 1,
                    minutes: 59
                }))
            }
             else if (seconds === 0 && minutes===0 && hours===0) {
                 
                     clearInterval(this.myInterval)
                 
             } 
         }, 1000)
     }
 
     componentWillUnmount() {
         clearInterval(this.myInterval)
     }
 
     render() {
         const { hours, minutes, seconds } = this.state
         return (
             <div>
                 { minutes === 0 && seconds === 0 && hours===0
                     ? <h1>Times up</h1>
                     : <h1>Time Remaining: {hours}: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                 }
             </div>
         )
     }
 }
