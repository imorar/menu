import React from 'react';

import { Menu } from '../components/Menu';

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    data: [
      {
        "slug": "we-conect",
        "title": "We-Conect Home page",
        "url": "https://www.we-conect.com/",
        "children": [
          {
            "slug": "live-events",
            "title": "Live Event",
            "url": "https://www.we-conect.com/liveevents",
          },
          {
            "slug": "digital-managed-events ",
            "title": "Digital Managed Events ",
            "url": "https://www.we-conect.com/l digital-managed-events ",
          }
        ]
      },
      {
        "slug": "google",
        "title": "Google",
        "url": "https://www.google.de"
      }
    ],
  },
};

const Template = (args) => <Menu {...args} />;

export const WithNoChildren = Template.bind({});
WithNoChildren.args = {
  data: [
    {
      "slug": "we-conect",
      "title": "We-Conect Home page",
      "url": "https://www.we-conect.com/",
    },
    {
      "slug": "google",
      "title": "Google",
      "url": "https://www.google.de"
    }
  ],
};

export const WithOneLevelOfChildren = Template.bind({});
WithOneLevelOfChildren.args = {
  data: [
    {
      "slug": "we-conect",
      "title": "We-Conect Home page",
      "url": "https://www.we-conect.com/",
      "children": [
        {
          "slug": "live-events",
          "title": "Live Event",
          "url": "https://www.we-conect.com/liveevents",
        },
        {
          "slug": "digital-managed-events ",
          "title": "Digital Managed Events ",
          "url": "https://www.we-conect.com/l digital-managed-events ",
        }
      ]
    },
    {
      "slug": "google",
      "title": "Google",
      "url": "https://www.google.de"
    }
  ],
};

export const WithMoreThanOneLevelOfChildren = Template.bind({});
WithMoreThanOneLevelOfChildren.args = {
  data: [
    {
      "slug": "we-conect",
      "title": "We-Conect Home page",
      "url": "https://www.we-conect.com/",
      "children": [
        {
          "slug": "live-events",
          "title": "Live Event",
          "url": "https://www.we-conect.com/liveevents",
        },
        {
          "slug": "digital-managed-events ",
          "title": "Digital Managed Events ",
          "url": "https://www.we-conect.com/l digital-managed-events ",
          "children": [
            {
              "slug": "test",
              "title": "Live Event SubMenu",
              "url": "https://www.we-conect.com/liveevents",
            },
          ]
        }
      ]
    },
    {
      "slug": "google",
      "title": "Google",
      "url": "https://www.google.de"
    }
  ],
};