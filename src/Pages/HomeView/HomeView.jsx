import React from 'react';
import { Helmet } from 'react-helmet';

import Section from 'components/Section';
import { SubTitle, Paragraph, FollowButton } from './HomeView.styled';

export default function HomeView() {
  return (
    <>
      <Helmet>
        <title>Home Page - Tweet User Cards App</title>
      </Helmet>
      <Section title="Welcome to the Tweet User Cards App! 🌈">
        <Paragraph>
          This application allows you to explore user cards and interact with
          them in a fun and engaging way. Get ready to dive into the world of
          tweets, followers, and a touch of humor!
        </Paragraph>

        <SubTitle>Explore User Cards</SubTitle>

        <Paragraph>
          On the home page, you'll find an exciting collection of user cards,
          each representing a unique user. These cards showcase their profile
          photo, tweet count, and follower count. Take a moment to browse
          through the diverse set of users and get a glimpse into their online
          presence.
        </Paragraph>

        <SubTitle>Follow the Fun</SubTitle>

        <Paragraph>
          Are you ready to join the conversation? With just a click of a button,
          you can become a follower of any user you find interesting. Simply
          locate the user card you want to follow, click the{' '}
          <FollowButton>Follow</FollowButton> button, and voila! You've just
          added yourself as a follower. The button will magically transform,
          indicating your newfound connection.
        </Paragraph>

        <SubTitle>Unfollow with Ease</SubTitle>

        <Paragraph>
          If you ever change your mind or want to adjust your follower list,
          fear not! Our app makes it a breeze to unfollow a user. Simply click
          the <FollowButton>Unfollow</FollowButton> button now, and just like
          that, you're no longer a follower. The button will gracefully return
          to its original state, and the follower count will adjust accordingly.
        </Paragraph>

        <SubTitle>Enjoy the Experience</SubTitle>

        <Paragraph>
          We hope you have a fantastic time exploring the Tweet User Cards App.
        </Paragraph>

        <Paragraph>
          So, go ahead, dive into the world of tweets, connect with new users,
          and let the fun begin!
        </Paragraph>

        <Paragraph>Happy tweeting! 🎉</Paragraph>
      </Section>
    </>
  );
}
