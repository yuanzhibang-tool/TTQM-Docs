!> This chapter explains some concepts used in the development of `TTQM`, such as front scripts, charts, user scripts, etc.

### Pre-Publish Script :id=1

> Refers to the use of scripts to perform template replacement, variable replacement, and other operations on the message to be sent before sending the message, and then send it, for example: replacing `time`, `unix timestamp`, `uuid`, etc. in the sent message, Users can process through the built-in `variable`,`variable pipe`,`pipe`, and users can also use `variable`,`variable pipe` , `Pipeline (pipe)` for expansion, see [pre-publish script](en/pre-publish-script/default.md) for details

!>Note: The difference between `variable pipe variable_pipe` and `pipe pipe` is that `variable pipe variable_pipe` is used to process a single template variable, while `pipe pipe` is used to process the entire message body

### Chart View :id=2

> Realize graphical analysis and processing through data statistics or processing of received messages, for example: draw ECG waveforms for ECG and blood oxygen device data received by `MQTT` server; online for a certain number of devices statistics etc.

### User Script :id=3

> Through user scripts, run a resident user microprogram to realize the debugging of complex functions, such as: debugging protocols between devices, simulating `IoT` devices, simulating server programs, batch message sending, message delivery, and persistence Wait.
