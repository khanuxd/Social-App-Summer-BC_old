import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from 'react-redux';
import measureProgress from '../../redux/utils/measureProgress';

const UserBox = () => {
  const {
    user: { name, avatar },
  } = useSelector((state) => state.auth);

  const { profile } = useSelector((state) => state.profile);

  //Check if there is a user profile
  let status,
    social,
    skills,
    company,
    website,
    location,
    bio,
    githubusername,
    experience,
    education;
  if (profile) {
    status = profile.status;
    social = profile.social;
    skills = profile.skills;
    company = profile.company;
    website = profile.website;
    location = profile.location;
    bio = profile.bio;
    githubusername = profile.githubusername;
    experience = profile.experience;
    education = profile.education;
  }

  return (
    <Card className='shadow-sm p-3'>
      <Row>
        <Col sm={4}>
          <Image roundedCircle src={avatar} />
        </Col>
        <Col sm={8}>
          <Card.Title>{name}</Card.Title>
          <p className='text-muted'>{status}</p>
        </Col>
      </Row>
      <p>
        Profile Ready:{' '}
        <span>
          {measureProgress([
            status,
            social,
            skills,
            company,
            website,
            location,
            bio,
            githubusername,
            experience,
            education,
          ])}
          %
        </span>{' '}
      </p>
      <ProgressBar
        variant='success'
        now={measureProgress([
          status,
          social,
          skills,
          company,
          website,
          location,
          bio,
          githubusername,
          experience,
          education,
        ])}
      />
      <p>
        Your Connection: <span>100</span>{' '}
      </p>
      <p>
        Total Posts: <span>10</span>{' '}
      </p>
    </Card>
  );
};

export default UserBox;