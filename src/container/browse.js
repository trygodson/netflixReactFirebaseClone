import React,{useContext, useState, useEffect} from 'react';
import Fuse from 'fuse.js'
import { SelectProfile } from './profile';
import {FirebaseContext} from '../context/firebase';
import {Card, Header, Loading, Player, Footer} from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'


export function BrowseContainer({slides}){
  const [category, setCategory] = useState('series')
  const [profile, setProfile] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const {firebase} = useContext(FirebaseContext)
  const [slideRows, setSlideRows] = useState([])

  const user = firebase.auth().currentUser || {};

   const userSignOut = ()=>(firebase.auth().signOut()) 
  useEffect(() => {
    setTimeout(() => {
      console.log(profile)
      setLoading(false)
    }, 3000);
  }, [profile.displayName])

  useEffect(() => {
    setSlideRows(slides[category])
  }, [slides, category])

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: [ 'data.title', 'data.genre']
    })
    const result = fuse.search(searchTerm).map(({item})=> item)
    if(slideRows.length > 0 && searchTerm.length > 3 && result.length > 0){
      setSlideRows(result)
    }else{
      setSlideRows(slides[category])
    }
  }, [searchTerm])
  return (
        profile.displayName ? (
      <>
      {loading ?( <Loading src={user.photoURL}/>) : ( <Loading.RealeaseBody/>)}
      <Header src='joker1' dontShowOnSmallViewPort >
        <Header.Frame>
          <Header.Group>         
            <Header.Logo to={ROUTES.HOME} src={logo}/>
            <Header.TextLink
            active={category === 'series' ? 'true' : 'false'}
            onClick={()=> setCategory('series')}
            >Series</Header.TextLink>
            <Header.TextLink
            active={category === 'films' ? 'true' : 'false'}
            onClick={()=> setCategory('films')}
            >Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            ></Header.Search>
            <Header.Profile>
              <Header.Picture src={user.photoURL}/>
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL}/>
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={userSignOut}>Sign Out</Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut> WATCH JOKER NOW</Header.FeatureCallOut>
            {/* eslint-disable-next-line*/}
          <Header.Text> choice and sequencing of units for desired physical and/or chemical transformation of materials. Process design is central to chemical engineering, and it can be considered to be the summit of that field, bringing together all of the field's components. Process design can be the design of new facilities or it can be the modification or expansion of existing facilities. The design starts at a conceptual level and ultimately ends   </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>          
      </Header>
      <Card.Group>
          {
            slideRows.map((slideItem)=>(
              <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Entities>
                  {slideItem.data.map((item)=>{
                    {console.log(item)}
                    return(
                      <Card.Item key={item.docId} item={item}>
                        <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                        <Card.Meta>
                          <Card.SubTitle>{item.title}</Card.SubTitle>
                          <Card.Text>{item.description}</Card.Text>
                        </Card.Meta>
                      </Card.Item>
                    )
                  })}
                </Card.Entities>
                <Card.Feature category={category}>
                  <Player>
                    <Player.Button/>
                    <Player.Video src='/videos/bunny.mp4'/>
                  </Player>
                </Card.Feature>
              </Card>
            ))
          }
      </Card.Group>
      <Footer/>
      </>
    ) :  (<SelectProfile user={user} setProfile={setProfile}/>)
)  
  
}