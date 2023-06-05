import styled from "styled-components"

export const Button = styled.button`
  /* width: 130px;
  height: 50px;
  color: #fafafa;
  border-radius: 50%;
  padding: 10px 25px;
  margin-right: 20px;
  background-color: #84451b;
  border: none;


  &:hover {
    background-color: #a7b61c;
    cursor: pointer;
    color: black;

  } */

   display: block;

  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;

  color: white;
  background-color: #3f51b5;

  border-radius: 6px;
  border: none;

  padding: 15px 30px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow 0.5s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  }
  `
