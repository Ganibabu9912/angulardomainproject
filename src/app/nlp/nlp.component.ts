import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nlp',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nlp.component.html',
  styleUrls: ['./nlp.component.css'],
})
export class NlpComponent {
  // Initially, no section is active
  syllabus = [
    {
      title: 'Introduction to NLP',
      description: 'Basics of Natural Language Processing and its applications.'
    },
    {
      title: 'Text Preprocessing',
      description: 'Techniques for cleaning and preparing text data.'
    },
    {
      title: 'Sentiment Analysis',
      description: 'Methods for determining sentiment in text data.'
    },
    {
      title: 'Named Entity Recognition',
      description: 'Identifying entities in text, such as names and organizations.'
    },
    {
      title: 'Word Embeddings',
      description: 'Techniques like Word2Vec and GloVe for representing words in vector space.'
    },
    {
      title: 'Language Models',
      description: 'Understanding and building models that predict text sequences.'
    },
    {
      title: 'Capstone Project: NLP Application',
      description: 'Building a real-world NLP application.'
    }
  ];

  activeSection: number | null = null;

  toggleSection(index: number) {
    this.activeSection = this.activeSection === index ? null : index; // Toggle the active section
  }

  activeVideo: number | null = null;
  activeClassDetails: number | null = null;

  videos = [
    {
      title: 'Introduction to NLP',
      description: 'Overview of NLP concepts and techniques.',
      subClasses: ['Basic Concepts', 'Applications'],
      link: '/videos/nlp-introduction'
    },
    {
      title: 'Text Preprocessing Techniques',
      description: 'Techniques to clean and preprocess text effectively.',
      link: '/videos/text-preprocessing',
      subClasses: ['Tokenization', 'Normalization']
    },
    {
      title: 'Sentiment Analysis Methods',
      description: 'Understanding sentiment analysis techniques.',
      link: '/videos/sentiment-analysis',
      subClasses: ['Polarity Detection', 'Emotion Detection']
    },
    {
      title: 'Named Entity Recognition',
      description: 'Identifying and classifying key information from text.',
      link: '/videos/named-entity-recognition',
      subClasses: ['Rule-Based Systems', 'Machine Learning Approaches']
    },
    {
      title: 'Building Language Models',
      description: 'Creating models that predict sequences of text.',
      link: '/videos/language-models',
      subClasses: ['N-grams', 'Deep Learning Models']
    }
  ];

  toggleVideo(index: number) {
    this.activeVideo = this.activeVideo === index ? null : index; // Toggle video
    this.activeClassDetails = null; // Reset class details when toggling videos
  }

  uploadClass(title: string): void {
    console.log(`Uploading class for: ${title}`);
    // Implement your upload logic here
  }

  showClassDetails(index: number) {
    this.activeClassDetails = this.activeClassDetails === index ? null : index; // Toggle class details
  }
}
