# trade shift

```javascript
 // getOShiftRequestFull() {
  //   return this.getShiftRequestFromOthers().map(row => {
  //     var myShift = this.getShift(row.myShiftId);
  //     var otherShift = this.getShift(row.otherShiftId);
  //     return {
  //       otherEmp: this.getUser(row.who),
  //       otherShiftDay: otherShift?.day,
  //       otherShiftST: otherShift?.startTime,
  //       otherShiftET: otherShift?.endTime,
  //       myShiftDay: myShift?.day,
  //       myShiftST: myShift?.startTime,
  //       myShiftET: myShift?.endTime
  //     }
  //   });
  // }

  getAllShiftRequestFull() {
    return this.shiftRequests.map(row => {
      var myShift = this.getShift(row.myShiftId);
      var otherShift = this.getShift(row.otherShiftId);
      console.log(myShift)
      console.log(row.who)
      console.log(this.getEmp(row.who)?.name)
      return {
        id: row.id,
        otherEmp: this.getUser(row.who),
        otherShiftId: otherShift?.id,
        otherShiftDay: otherShift?.day,
        otherShiftST: otherShift?.startTime,
        otherShiftET: otherShift?.endTime,
        myShiftId: myShift?.id,
        myShiftDay: myShift?.day,
        myShiftST: myShift?.startTime,
        myShiftET: myShift?.endTime
      }
    });
  }

  // getShiftRequestFromOthers() {
  //   return this.shiftRequests.filter((row) => {
  //     // if older don't include
  //     if (this.getShift(row.myShiftId)!.startTime.getTime() < this.today.getTime()) {
  //       return false;
  //     } else
  //       // if by me don't include
  //       return (row.who == this.me.id) ? true : false;
  //   });
  // }
```
