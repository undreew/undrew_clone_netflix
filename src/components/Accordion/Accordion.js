import React, {Fragment} from 'react';

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import Typography from '../Typography/Typography';

import './Accordion.css';

export default function AccordionComponent(props) {
	const {items} = props;

	return (
		<Fragment>
			<Accordion className='accordion'>
				{items.map((item, index) => {
					return (
						<AccordionItem className='accordion--item' key={index}>
							<AccordionItemHeading>
								<AccordionItemButton className='accordion--item-question'>
									{item.header} <span>{'+'}</span>
								</AccordionItemButton>
							</AccordionItemHeading>

							<AccordionItemPanel className='accordion--item__answer-container'>
								{item.content.map((itemContent, itemContentIndex) => {
									return (
										<Typography
											type='h2'
											classes='accordion--item__answer'
											key={itemContentIndex}
										>
											{itemContent}
										</Typography>
									);
								})}
							</AccordionItemPanel>
						</AccordionItem>
					);
				})}
			</Accordion>
		</Fragment>
	);
}
