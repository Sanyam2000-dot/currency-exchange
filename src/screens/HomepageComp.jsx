import React, { useState, useEffect } from "react";
import AuthenticatedNavbar from "../components/AuthenticatedNavbar"
import { FooterComp } from "../components/FooterComp";
import {
  FormControl,
  Select,
  FormLabel,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const HomepageComp = () => {
  const [text1, setText1] = useState(1);
  const [text2, setText2] = useState(1);

  const [country1, setCountry1] = useState([]);
  const [country2, setCountry2] = useState([]);

  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  useEffect(() => {
    getExchange();
  }, [value2, value1]);

  const getExchange = async () => {
    const res = await axios.get(
      "http://data.fixer.io/api/latest?access_key=9cfc8796aa38c71597638ddb98e85881"
    );
    console.log(res.data);
    setCountry1(res.data.rates);
    setCountry2(res.data.rates);
  };

  const convert = (e) => {
    e.preventDefault();
    let num = (value2 / value1) * text1;

    setText2(num);
  };

  return (
    <div>
      <AuthenticatedNavbar />
      <div style={{ margin: "3rem 5rem" }}>
        <Heading align={"center"}>Exchange your Currency in Seconds!</Heading>

        <img
          width={"350px"}
          height={"300px"}
          style={{ margin: "auto", paddingTop: "0.5rem" }}
          src="/hero.png"
          alt=""
        />
        <Stack direction={["column", "row"]}>
          <input
            type="number"
            value={text1 || ""}
            onChange={(e) => setText1(e.target.value)}
            style={{
              border: "1px solid 	#D3D3D3",
              margin: "2rem 1rem 0.5rem 1rem",
              padding: "0.4rem",
              borderRadius: "4px",
            }}
          />
          <FormControl onChange={(e) => setValue1(e.target.value)}>
            <FormLabel htmlFor="country">Currency</FormLabel>
            <Select id="country" placeholder="Select country">
              {Object.keys(country1).map((val, idx) => (
                <option key={idx} value={country1[val]}>
                  {val}
                </option>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack direction={["column", "row"]}>
          <input
            type="number"
            value={text2 || ""}
            onChange={(e) => setText2(e.target.value)}
            style={{
              border: "1px solid 	#D3D3D3",
              margin: "2rem 1rem 0.5rem 1rem",
              padding: "0.4rem",
              borderRadius: "4px",
            }}
          />

          <FormControl onChange={(e) => setValue2(e.target.value)}>
            <FormLabel htmlFor="country">Currency</FormLabel>
            <Select id="country" placeholder="Select country">
              {Object.keys(country2).map((val, idx) => (
                <option key={idx} value={country2[val]}>
                  {val}
                </option>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <div align={"center"} style={{ marginTop: "0.5rem" }}>
          <Button width={"100%"} colorScheme="blue" onClick={convert}>
            Convert Now
          </Button>
        </div>
      </div>

      <FooterComp />
    </div>
  );
};

export default HomepageComp;
