import { Injectable } from '@nestjs/common';
import { CreateTalkDto } from './dto/create-talk.dto';
import { UpdateTalkDto } from './dto/update-talk.dto';
import { Talk } from './entities/talk.entity';

@Injectable()
export class TalksService {
  private talks: Talk[] = [];

  constructor() {
    this.initializeTalks();
  }

  private initializeTalks() {
    const talkData = [
      {
        id: 1,
        title: 'Opening Keynote: The Future of AI in Software Development',
        speakers: ['Dr. Evelyn Reed'],
        categories: ['AI', 'Software Development', 'Keynote'],
        description: 'An insightful look into how artificial intelligence is shaping the landscape of modern software development, from automated code generation to intelligent debugging.',
      },
      {
        id: 2,
        title: 'Building Scalable Microservices with NestJS and Kubernetes',
        speakers: ['Alex Chen', 'Maria Rodriguez'],
        categories: ['NestJS', 'Microservices', 'Kubernetes', 'Backend'],
        description: 'A deep dive into designing and deploying highly scalable microservices using the NestJS framework and orchestrating them with Kubernetes.',
      },
      {
        id: 3,
        title: 'Frontend Performance Optimization: Tips and Tricks for React',
        speakers: ['Samira Khan'],
        categories: ['React', 'Frontend', 'Performance'],
        description: 'Learn practical strategies and advanced techniques to significantly boost the performance of your React applications, ensuring a smooth user experience.',
      },
      {
        id: 4,
        title: 'Demystifying Blockchain: A Developer\'s Guide',
        speakers: ['Ben Carter'],
        categories: ['Blockchain', 'Web3', 'Security'],
        description: 'This talk breaks down the complexities of blockchain technology, explaining its core concepts and how developers can start building decentralized applications.',
      },
      {
        id: 5,
        title: 'Effective State Management in Large-Scale React Applications',
        speakers: ['Chloe Davis', 'Ethan White'],
        categories: ['React', 'State Management', 'Frontend'],
        description: 'Explore various state management patterns and libraries for React, and understand how to choose the right solution for your large-scale projects.',
      },
      {
        id: 6,
        title: 'Closing Thoughts: Embracing the Open Source Ecosystem',
        speakers: ['David Green'],
        categories: ['Open Source', 'Community', 'Keynote'],
        description: 'A reflection on the importance of open source contributions, community building, and how to get involved in the vibrant open source ecosystem.',
      },
    ];

    let currentHour = 10;
    let currentMinute = 0;

    talkData.forEach((talk, index) => {
      const startTime = new Date();
      startTime.setHours(currentHour, currentMinute, 0, 0);

      const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hour talk

      this.talks.push({
        ...talk,
        duration: 60, // minutes
        startTime: startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
        endTime: endTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      });

      currentHour = endTime.getHours();
      currentMinute = endTime.getMinutes();

      // Add 10-minute transition break after each talk, except the last one
      if (index < talkData.length - 1) {
        currentMinute += 10;
        if (currentMinute >= 60) {
          currentHour += Math.floor(currentMinute / 60);
          currentMinute %= 60;
        }
      }

      // Add 1-hour lunch break after the third talk
      if (index === 2) {
        const lunchStartTime = new Date();
        lunchStartTime.setHours(currentHour, currentMinute, 0, 0);
        const lunchEndTime = new Date(lunchStartTime.getTime() + 60 * 60 * 1000); // 1 hour lunch

        this.talks.push({
            id: 99, // Unique ID for lunch
            title: 'Lunch Break',
            speakers: [],
            categories: ['Break'],
            duration: 60,
            description: 'Enjoy your lunch!',
            startTime: lunchStartTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
            endTime: lunchEndTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
        });

        currentHour = lunchEndTime.getHours();
        currentMinute = lunchEndTime.getMinutes();
      }
    });
  }

  create(createTalkDto: CreateTalkDto) {
    // For this static data, we won't implement creation
    return 'This action adds a new talk';
  }

  findAll(): Talk[] {
    return this.talks;
  }

  findOne(id: number) {
    return `This action returns a #${id} talk`;
  }

  update(id: number, updateTalkDto: UpdateTalkDto) {
    return `This action updates a #${id} talk`;
  }

  remove(id: number) {
    return `This action removes a #${id} talk`;
  }
}