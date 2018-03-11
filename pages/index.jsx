import React, { PureComponent as Component } from 'react';
import Content from '../components/content';
import Footer from '../components/footer';
import Button from '../components/button';
import Cover from '../components/cover';
import Title from '../components/title';
import Hr from '../components/divider';
import Grid from '../components/grid';
import Card from '../components/card';
import Info from '../components/info';
import Head from 'next/head';
import axios from 'axios';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            show: true,
            page: 1,
        }
        this.getPlanet = planet => {
            axios.get(`https://swapi.co/api/planets/${planet}/`)
                .then( response => {
                    this.setState({ planet: response.data })
                })
                .catch( error => {
                    console.log(error);
                });
        }
        this.newPlanet = () => {
            const ramdomPlanet = this.getPlanet(Math.ceil(Math.random() * 61));
        }
        this.handleClickShow = () => {
            this.setState({ show: !this.state.show });
        }
        this.handleClickNext = () => {
            this.newPlanet();
            this.setState({ show: true });
            console.log(this.state.planet)
        }
    }

    componentDidMount() {
        this.newPlanet();
    }

    render() {
        return (
            <Grid>
                <Head>
                    <title>My Star Wars Quiz</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
                </Head>
                <Card>
                    <Title>quiz</Title>
                    <Content show={this.state.show}>
                        <Cover show={this.state.show} onClick={this.handleClickShow}/>
                        <Title show={this.state.show}>{this.state.planet.name}</Title>
                        <Hr/>
                        <Info><span>Population:</span> <small>{this.state.planet.population}</small></Info>
                        <Info><span>Climate:</span> <small>{this.state.planet.climate}</small></Info>
                        <Info><span>Terrain:</span> <small>{this.state.planet.terrain}</small></Info>
                        <br/>
                        {
                            this.state.planet.films ? 
                            <Footer>Featured in {this.state.planet.films.length} films</Footer>
                            : null
                        }
                    </Content>
                    <Button 
                        onClick={this.state.show ? this.handleClickShow : this.handleClickNext }>
                        {this.state.show ? 'show' : 'next'}
                    </Button>
                </Card>
            </Grid>
        );
    }
}