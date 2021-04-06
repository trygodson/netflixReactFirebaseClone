import React from 'react';
import faqData from '../fixtures/faqs.json'
import { Accordion } from '../components/index';
import OptForm from '../components/opt-form';

export function FaqContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently asked Questions</Accordion.Title>
                {faqData.map((item)=>(
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
                <OptForm>
                    <OptForm.Input placeholder='Enter Email Address'/>
                    <OptForm.Button >Try it Now</OptForm.Button>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                </OptForm>
        </Accordion>
    )
};

