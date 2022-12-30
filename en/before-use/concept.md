!> This chapter explains some concepts used in the use of `TTQM`, such as `Pre-Publish Script`, `Chart`, `User Script`, etc.

---

### Pre-Publish Script :id=1

> The Pre-Publish Script refers to the script that performs template replacement, variable replacement and other operations on the message to be published before publishing the message, for example: replacing `time`, `unix timestamp`, `uuid`, etc. in the message, Users can process via the built-in `variable`,`variable pipe`,`pipe`, and users can also expand custom `variable`,`variable pipe`, `Pipe` for more features, see [Pre-Publish Script](en/pre-publish-script/default.md) for details.

!>Note: The difference between `variable pipe` and `pipe` is that `variable pipe` is used to process a single template variable, while `pipe` is used to process the entire message body.

---

### Chart :id=2

> Realize the graphical analysis of data using the received data, for example: use the received ECG data to draw the ECG waveform, use the received blood oxygen data to draw the blood oxygen waveform; analyze the number of online devices, etc.

---

### User Script :id=3

> Run a simple script to realize the debugging of complex functions, such as: debugging protocols between devices, simulating `IoT` devices, simulating server programs, batch message publishing, message delivery, and persistence, etc.
