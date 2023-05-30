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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type OpinionOne = {
  name: string;
  describe: string;
  rating: number;
  ratingStars: string;
};

export const SingleCardOpinion = () => {
  const [opinions, setOpinions] = useState<(OpinionOne & { id: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getOpinions = async () => {
    const opinionsCollection = collection(db, "opinions") as CollectionReference<OpinionOne>;

    const querySnapshot = await getDocs<OpinionOne>(opinionsCollection);
    try {
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
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getOpinions().then(() => {
      setIsLoading(false);
    });
  }, []);

  const filterOutEmptyNames = ({ name }: { name: string }) => Boolean(name);

  return (
    <OpinionContainer>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        focusOnSelect={false}
        minimumTouchDrag={80}
        responsive={{
          largeDesktop: {
            breakpoint: {
              max: 3000,
              min: 1400,
            },
            items: 5,

            partialVisibilityGutter: 40,
          },
          desktop: {
            breakpoint: {
              max: 1400,
              min: 1025,
            },
            items: 5,

            partialVisibilityGutter: 40,
          },
          smallDesktop: {
            breakpoint: {
              max: 1024,
              min: 701,
            },
            items: 3,

            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 700,
              min: 465,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        slidesToSlide={1}
        swipeable
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
