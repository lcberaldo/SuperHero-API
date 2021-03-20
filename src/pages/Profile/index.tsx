import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

import {
  IoCaretBackOutline,
  IoEyeSharp,
  IoSpeedometerOutline,
} from 'react-icons/io5';
import { CgGenderFemale, CgGenderMale } from 'react-icons/cg';
import { FaWeight } from 'react-icons/fa';
import {
  GiBodyHeight,
  GiBrain,
  GiWeightLiftingUp,
  GiBroadsword,
  GiDuration,
} from 'react-icons/gi';
import { ImPower } from 'react-icons/im';

import sh from '../../assets/sh.png';
import { Container, Header, Infos } from './style';

interface CharParams {
  id: string;
}

interface Char {
  image: {
    url: string;
  };
  biography: {
    'full-name': string;
    publisher: string;
  };
  id: string;
  name: string;
  appearance: {
    gender: string;
    'eye-color': string;
    weight: string;
    height: string;
  };
  powerstats: {
    intelligence: string;
    strength: string;
    power: string;
    combat: string;
    durability: string;
    speed: string;
  };
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<Char | null>();
  const { params } = useRouteMatch<CharParams>();

  useEffect(() => {
    api
      .get(`${params.id}`)
      .then(response => {
        setProfile(response.data);
      })
      .catch(e => {
        console.log(e);
        setProfile(null);
      });
  }, [params.id]);

  console.log(profile);
  return (
    <>
      <Header>
        <div>
          <img src={sh} alt="" />
          <span>API</span>
        </div>

        <Link to="/">
          <IoCaretBackOutline size={24} />
          <span>back</span>
        </Link>
      </Header>
      {profile ? (
        <Container>
          <img src={profile.image.url} alt="hulk" />
          <span>{profile.name}</span>
          <span className="pt-3">{profile.biography['full-name']}</span>
          <p className="pt-3">{profile.biography.publisher}</p>

          <Infos>
            <span className="title">Appearance</span>
            <div>
              <div>
                <IoEyeSharp />
                <span>Eyes color</span>
                <span>{profile.appearance['eye-color']}</span>
              </div>
              <div>
                <div className="d-flex">
                  <CgGenderFemale />
                  <CgGenderMale />
                </div>
                <span>Gender</span>
                <span>{profile.appearance.gender}</span>
              </div>
              <div>
                <FaWeight />
                <span>Weight</span>
                <span>{profile.appearance.weight[1]}</span>
              </div>
              <div>
                <GiBodyHeight />
                <span>Height</span>
                <span>{profile.appearance.height[1]}</span>
              </div>
            </div>
          </Infos>

          <Infos>
            <span className="title ">Stats</span>
            <div>
              <div>
                <GiBrain />
                <span>Intelligence</span>
                <span>{profile.powerstats.intelligence}</span>
              </div>
              <div>
                <GiWeightLiftingUp />
                <span>Strength</span>
                <span>{profile.powerstats.strength}</span>
              </div>
              <div>
                <ImPower />
                <span>power</span>
                <span>{profile.powerstats.power}</span>
              </div>
              <div>
                <GiBroadsword />
                <span>combat</span>
                <span>{profile.powerstats.combat}</span>
              </div>
              <div>
                <GiDuration />
                <span>durability</span>
                <span>{profile.powerstats.durability}</span>
              </div>
              <div>
                <IoSpeedometerOutline />
                <span>speed</span>
                <span>{profile.powerstats.speed}</span>
              </div>
            </div>
          </Infos>
        </Container>
      ) : (
        <span>ERRO</span>
      )}
    </>
  );
};

export default Profile;
