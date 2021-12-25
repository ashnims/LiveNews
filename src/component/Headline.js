import React from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect, useState, useRef } from "react";
import {
  InnerCont,
  Container,
  Display,
  Input,
  Title,
  Form,
  Section,
  Logo,
  Button,
  Image,
  Tag,
  P1,
  P2,
  P,
} from "./SSC";

export const Headline = () => {
  const [material, setMaterial] = useState("current");
  // const [mate, setMate] = useState();
  const [show, setshow] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const news = async () => {
      const res = await axios.get(
        ` https://newsapi.org/v2/top-headlines?q=${material}&apiKey=59a8411eeea14d9d98cc961ecdbb87e7`
        // `https://newsapi.org/v2/top-headlines?country=in&q=${material}&category=${mate}&apiKey=59a8411eeea14d9d98cc961ecdbb87e7`
      );

      console.log(res.data.articles);
      setshow(res.data.articles);
    };
    news();
  }, [material]);

  const Handler = (e) => {
    e.preventDefault();
  };
  // const change = inputRef.current.focus();
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-sine" });
  }, []);
  return (
    <Container>
      <Display>
        <Logo data-aos="fade-zoom-in">Live-News</Logo>
        <Form onSubmit={Handler} data-aos="flip-down" data-aos-delay="2000">
          <Input
            ref={inputRef}
            // onMouseEnter={change}
            type="text"
            value={material}
            onChange={(e) => {
              setMaterial(e.target.value);
            }}
          />
          <Button type="submit" value="search" />
        </Form>
      </Display>
      <Section>
        {show.map(
          (
            {
              author,
              publishedAt,
              urlToImage,
              url,
              title,
              description,
              content,
            },
            index
          ) => {
            return (
              <InnerCont data-aos="flip-up" key={index}>
                <div className="img-c">
                  <a href={url}>
                    <Image
                      data-aos="fade-zoom-out"
                      src={urlToImage}
                      alt="image"
                    />
                  </a>
                </div>
                <Title data-aos="zoom-in">{title}</Title>
                <Tag>
                  <P1>{author}</P1>
                  <P2>
                    <i>{publishedAt}</i>
                  </P2>
                </Tag>
                <P>{description}</P>
              </InnerCont>
            );
          }
        )}
      </Section>
    </Container>
  );
};
