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

type OpinionOne = {
  name: string;
  describe: string;
  rating: number;
  ratingStars: string;
};

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
              <b>Ocena: {ratingStars}</b>
            </p>
          </SingleCardRating>
        </SingleCardOpinionSection>
      ))}
    </OpinionContainer>
  );
};
