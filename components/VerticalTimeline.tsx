'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiCalendar, HiArrowNarrowRight } from 'react-icons/hi';

import React from 'react';

export default function VerticalTimeline({ timelineData }) {
  return (
    <Timeline>
      {timelineData.map((item, index) => (
        <Timeline.Item key={index}>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>
              {item.time}
            </Timeline.Time>
            <Timeline.Title>
              {item.title}
            </Timeline.Title>
            <Timeline.Body>
              <p>
                {item.description}
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
