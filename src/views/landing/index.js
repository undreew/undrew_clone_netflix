import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import Section from '../../components/Section/Section';
import SectionMembership from '../../components/Section/SectionMembership/SectionMembership';
import AccordionComponent from '../../components/Accordion/Accordion';
import WindowSize from '../../components/WindowSize/WindowSize';

import heroSection from '../../assets/images/hero section/hero header large.jpg';
import tv from '../../assets/images/second section/tv.png';
import st from '../../assets/images/third section/stranger things.jpg';
import kids from '../../assets/images/fifth section/kids.png';

import {questions} from '../../util/questions/questions';
import Footer from '../../components/Footer/Footer';

function Index() {
	return (
		<PageLayout header='true'>
			{/* MAJOR BREAKPOINTS */}
			{/* FIRST BREAKPOINT: 1450px */}
			{/* SECOND BREAKPOINT: 950px */}
			{/* FINAL BREAKPOINT: 550px */}

			<Section
				hero
				membership
				backImage={heroSection}
				backAlt='Hero Header'
				mainHeader='Unlimited movies, TV shows, and more.'
				mainParagraph='Watch anywhere. Cancel anytime.'
			/>

			<Section
				dual
				backImage={tv}
				backAlt='TV'
				mainHeader='Enjoy on your TV.'
				mainParagraph='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
			/>

			<Section
				dual
				reverse
				backImage={st}
				backAlt='TV'
				mainHeader='Download your shows to watch offline.'
				mainParagraph='Save your favorites easily and always have something to watch.'
			/>

			<Section
				dual
				mainHeader='Watch everywhere.'
				mainParagraph='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
			/>

			<Section
				dual
				reverse
				backImage={kids}
				backAlt='Kids'
				mainHeader='Create profiles for kids.'
				mainParagraph='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
			/>

			<Section regular mainHeader='Frequently Asked Questions'>
				<AccordionComponent items={questions} />
				<SectionMembership />
			</Section>

			<Footer />
		</PageLayout>
	);
}

export default Index;
