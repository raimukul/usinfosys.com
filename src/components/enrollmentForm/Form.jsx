import React, { useState } from "react";
import instance from "../../axios";
import {
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [training, setTraining] = useState("");
  const [cmessage, setCmessage] = useState("");

  console.log(name, email, mobile, training, cmessage);

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (name && email && /^\d{10}$/.test(mobile) && training && cmessage) {
        const res = await instance.post("/enroll", {
          name,
          email,
          mobile,
          training,
          cmessage,
        });
        window.alert(res.data?.message);
      } else {
        window.alert("Please fill all details");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Container>
        <Card className="p-3">
          <form onSubmit={(e) => submit(e)}>
            <Row>
              <Col md="6" className="pt-2">
                <TextField
                  className="w-100"
                  label="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col md="6" className="pt-2">
                <TextField
                  className="w-100"
                  label="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="pt-2">
              <Col md="6" className="pt-2">
                <TextField
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                  }}
                  className="w-100"
                  label="Phone"
                  type="tel"
                  required
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Col>
              <Col md="6" className="pt-2">
                <FormControl className="w-100" required>
                  <InputLabel id="demo-simple-select-helper-label">
                    Training
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={training}
                    label="Training"
                    onChange={(e) => setTraining(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="DBA Training">DBA Training</MenuItem>
                    <MenuItem value="Software QA Training">
                      Software QA Training
                    </MenuItem>
                  </Select>
                  <FormHelperText>
                    Please choose the training you want to start.
                  </FormHelperText>
                </FormControl>
              </Col>
            </Row>

            <Row>
              <Col className="pt-3">
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  placeholder="You can request for any details regarding training."
                  multiline
                  rows={4}
                  required
                  className="w-100"
                  onChange={(e) => setCmessage(e.target.value)}
                />
              </Col>
            </Row>
            <div className="pt-3">
              <Button
                variant="contained"
                className="text-left btn-contact"
                endIcon={<SendIcon />}
                type="submit"
              >
                Send
              </Button>
            </div>
          </form>
        </Card>
      </Container>
    </div>
  );
}
