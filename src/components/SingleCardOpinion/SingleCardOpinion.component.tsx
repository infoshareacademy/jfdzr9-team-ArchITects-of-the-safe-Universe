import { CollectionReference, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase/firebase.config";
import {
  OpinionContainer,
  SingleCardDescribe,
  SingleCardName,
  SingleCardOpinionSection,
  SingleCardRating,
} from "./SingleCardOpinion.styled";
import { Carousel } from "@trendyol-js/react-carousel";
import { Arrow } from "../Products/Product.styled";

type OpinionOne = {
  name: string;
  describe: string;
  rating: number;
  ratingStars: string;
};

const imageArrowLeft = new URL("../../assets/arrow-left.svg", import.meta.url).href;
const imageArrowRight = new URL("../../assets/arrow-right.svg", import.meta.url).href;

export const SingleCardOpinion = () => {
  const [opinions, setOpinions] = useState<(OpinionOne & { id: string })[]>([]);

  const getOpinions = () => {
    const opinionsCollection = collection(db, "opinions") as CollectionReference<OpinionOne>;
    getDocs<OpinionOne>(opinionsCollection).then((querySnapshot) => {
      const opinions = querySnapshot.docs.map((doc) => {
        function getStarsFromRating(rating: number): string {
          const fullStar = "★";
          const emptyStar = "☆";
          const maxStars = 5;
          const roundedRating = Math.round(rating * 2) / 2;
          const fullStars = Math.floor(roundedRating);
          const emptyStars = maxStars - fullStars;
          return fullStar.repeat(fullStars) + emptyStar.repeat(emptyStars);
        }
        const data = doc.data() as OpinionOne;
        return {
          id: doc.id,
          ...doc.data(),
          ratingStars: getStarsFromRating(data.rating),
        };
      });
      setOpinions(opinions);
    });
  };
  useEffect(() => {
    getOpinions();
  }, []);
  // console.log(opinions);

  const filterOutEmptyNames = ({ name }: { name: string }) => Boolean(name);

  return (
    <OpinionContainer>
      <Carousel
        show={6}
        slide={1}
        leftArrow={
          <Arrow>
            <img src={imageArrowLeft} alt="Left" />
          </Arrow>
        }
        rightArrow={
          <Arrow>
            <img src={imageArrowRight} alt="Right" />
          </Arrow>
        }
        swiping={true}
      >
        {opinions.filter(filterOutEmptyNames).map(({ id, name, describe, ratingStars }) => (
          <SingleCardOpinionSection key={id}>
            <SingleCardName>
              <p>{name}</p>
            </SingleCardName>
            <SingleCardDescribe>
              <p>{describe}</p>
            </SingleCardDescribe>
            <SingleCardRating>
              <p>
                <b>{ratingStars}</b>
              </p>
            </SingleCardRating>
          </SingleCardOpinionSection>
        ))}
      </Carousel>
    </OpinionContainer>
  );
};
