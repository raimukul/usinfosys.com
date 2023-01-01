import React, { useState } from "react";
import instance from "../../axios";
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Col, Image, Row } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [subject, setSubject] = useState("");
  const [cmessage, setCmessage] = useState("");

  console.log(name, email, mobile, country, subject, cmessage);

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (
        name &&
        email &&
        /^\d{10}$/.test(mobile) &&
        country &&
        subject &&
        cmessage
      ) {
        const res = await instance.post("/contact", {
          name,
          email,
          mobile,
          country,
          subject,
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
      <Box>
        <Image className="w-100" src="./banner/contact.svg"></Image>
      </Box>
      <div className="container">
        <Card className="p-5">
          <Typography variant="subtitle1" pb={3}>
            Thank you for your interest in American Info Systems Inc.. Please
            look for the category that best fits your needs:
          </Typography>
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
                  type="number"
                  required
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Col>
              <Col md="6" className="pt-2">
                <FormControl className="w-100" required>
                  <InputLabel id="demo-simple-select-helper-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={country}
                    label="Country"
                    // onChange={handleChange}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                  </Select>
                  <FormHelperText>
                    Please choose service country.
                  </FormHelperText>
                </FormControl>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                <TextField
                  id="outlined-textarea"
                  label="Subject"
                  placeholder="Please give heading for your querry."
                  multiline
                  required
                  className="w-100"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  placeholder="Please elaborate your querry to understand your querry."
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
          <div className="pt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.689916634392!2d-94.67281728471384!3d38.93106437956555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ea4bfe400001%3A0x12b6a2fe3cf1f6f5!2s7300%20W%20110th%20St%20%23700%2C%20Overland%20Park%2C%20KS%2066210%2C%20USA!5e0!3m2!1sen!2sin!4v1664558614499!5m2!1sen!2sin"
              className="w-100 h-auto"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              title="American Info Systems Inc."
            ></iframe>
          </div>
        </Card>
      </div>
    </div>
  );
}
