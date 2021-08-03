import React from 'react';
import { gql, useQuery } from '@apollo/client';
// import gql from 'graphql-tag'; // this is old
import {Grid, Transition} from 'semantic-ui-react';

import PostCard from '../components/PostCard';

function Home(){
    const { data, loading } = useQuery(FETCH_POSTS_QUERY);

    // --------- WHY DATA UNDEFINED ON REFRESH??? ------

    if (!data) {
        console.log("data undefined")
        return "error here"
    }

    const { getPosts: posts } = data;

    return(
        <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>Recent Posts</h1>
            </Grid.Row>
        <Grid.Row>
            
            {loading ? (
                <h1>Loading Posts...</h1>
            ): ( 
                posts && posts.map(post => (
                    <Grid.Column key = {post.id} style={{marginBottom: 20}}>
                        {/* <Image src='/images/wireframe/media-paragraph.png' /> */}
                        <PostCard post = {post}/>
                    </Grid.Column>

                ))
            )}
        </Grid.Row>
        </Grid>
    )
}

const FETCH_POSTS_QUERY = gql`
    {

        getPosts{
            id body createdAt username likeCount
            likes{
                username
            }
            commentCount
            comments{
                id username createdAt body
            } 
        }   
    }

`;

export default Home;