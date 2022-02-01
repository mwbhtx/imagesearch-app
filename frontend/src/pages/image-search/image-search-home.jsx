import './image-search-styles.css';
import '../../styles/global-styles.css';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { replacePexelObject } from './pexel-slice';
import 'dotenv/config'



function App() {

    return (
        <>
            <SearchBar/>
            <ImageResultsGallery/>
        </>
    )
}

function SearchBar() {

    const pexelData = useSelector((state) => state.pexel.value) // for accessing pexel store data
    const dispatch = useDispatch();

    let [formValue, setFormValue] = useState('candy');

    const onFormInputChange = (e) => {
        setFormValue(e.target.value);
    }

    const fetchPexelImages = async (e) => {

        e.preventDefault();
        
        const pexelsApi = process.env.REACT_APP_PEXELS_API_KEY; 
        const url = 'http://localhost:3001/search';
        const queryParams = {
            query: formValue,
            per_page: 80,
        }; 
        
        const queryParamsAsUrlString = new URLSearchParams(queryParams).toString();

        const fetchUrl = url + '?' + queryParamsAsUrlString;

        const response = await fetch(fetchUrl, {
            method: 'GET',
        })


        if (response.ok) {
            const pexelResponse = await response.json();
            dispatch(replacePexelObject(pexelResponse));
        } else {
            throw new Error('Oops, response error occured!');
        }
        
    }

    return (
        
        <div className='search-bar-container'>

            <div>
                <h2>Image Search by Category</h2>
                <div id='poweredby-container'>
                    <h5>POWERED BY:</h5>
                    <img id='pexels-logo' src='https://images.pexels.com/lib/api/pexels.png'/>
                </div>
            </div>

            <form id='search-input-form' onSubmit={fetchPexelImages}>
                <input type='text' value={formValue} onChange={onFormInputChange}/>
                <input type="submit" value="search"/>
            </form>

            <h4 id='search-helper-text'>e.g. ocean, nature, people, soccer</h4>  

        </div>

    )
}

function ImageResultsGallery(props) {

    let pexelData = useSelector(state => state.pexel.value);

    let pexelImageList = [];

    const onInfoClick = e => {

        const id = e.currentTarget.getAttribute('tag');

        const element = document.getElementById(id);
        element.classList.toggle('visible');
    }

    const renderPexelList = () => {
        if (pexelData.photos) {
            for (let [key,value] of Object.entries(pexelData.photos)) {

                const imageURL = value.src.portrait;
                const imageID = value.id;
                const imageArtist = value.photographer;
                const photographerURL = value.photographer_url;
                const avgColor = value.avg_color;

                pexelImageList.push(
                    <div key={imageID} className='image-container md-light' style={{ backgroundColor: avgColor}}>
                    <div className='image-detail-container' id={imageID}>
                        
                        <span>Photographer</span>
                        <a className='artist-link' href={photographerURL} target='_blank'>{imageArtist}</a>
                        <a className='image-link' href={imageURL} target='_blank'>view image</a>
                    </div>
                        <div className='info-icon-container' tag={imageID}  onClick={onInfoClick}>
                            <span className='circle-layer'/>
                            <i className="fas fa-bars info-icon"></i>
                        </div>
                        <img src={imageURL}/>
                    </div>
                )
            }
        }
        return pexelImageList;
    }

    return (
        <div className='gallery-container'>
            {renderPexelList()}
        </div>
    )
}

export default App;