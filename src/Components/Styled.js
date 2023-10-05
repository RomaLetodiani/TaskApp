import styled from 'styled-components';

export const Content = styled.div`
  color: #6c60d2;
  display: flex;
  width: 100%;
  min-height: 100vh;
  min-width: 280px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(45deg, #dcfdff, #4facfe);

  .wrapper {
    max-width: 330px;
    width: 100%;
    padding: 40px;
    border-radius: 30px;
    background-color: #8b98df;
    box-shadow: inset -5px -5px 60px 25px #5437c9, 5px 5px 20px -3px #393939;
    header {
      position: relative;
      margin-bottom: 30px;
      overflow: hidden;
      border-radius: 10px;
      input {
        padding: 10px 52px 10px 20px;
        width: 100%;
        outline: none;
        border: none;
        font-size: 12px;
        &::placeholder {
          color: #9083f8;
        }
      }
      button {
        position: absolute;
        outline: none;
        border: none;
        font-size: 12px;
        padding: 8px;
        background-color: #e9e7ff;
        width: 50px;
        font-weight: 700;
        height: 38px;
        border-radius: 10px;
        right: 0;
        top: 0;
      }
    }

    .taskApp {
      > div {
        padding: 0 10px;
        overflow: auto;
        height: 200px;

        scroll-behavior: smooth;

        &::-webkit-scrollbar {
          width: 6px; /* Width of the scrollbar */
        }

        /* Webkit scrollbar thumb */
        &::-webkit-scrollbar-thumb {
          background-color: #e9e7ff; /* Color of the thumb */
          border-radius: 6px; /* Rounded corners for the thumb */
        }

        > div:not(:nth-child(1)) {
          margin-top: 10px;
        }

        > div {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e9e7ff;
          border-radius: 10px;
          padding: 0px 5px 0px 10px;
          font-size: 20px;
          input {
            width: 100%;
            background: transparent;
            outline: none;
            border: none;
            padding: 10px;
            font-size: 14px;
          }
          .lastPopup {
            bottom: 40px;
          }

          > div {
            position: absolute;
            background-color: #fff;
            border-radius: 10px;
            padding: 5px;
            right: 0;
            bottom: -50px;
            font-size: 14px;
            z-index: 1;

            button {
              display: flex;
              gap: 5px;
              justify-content: center;
              align-items: center;
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  img {
    max-width: 500px;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    img {
      max-width: 200px;
    }
  }
`;
