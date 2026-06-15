import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea, Chip } from '@mui/material';
import {
  ShieldCheckIcon,
  BoltIcon,
  CpuChipIcon,
  CubeIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const ExplorePage = ({ onTopicSelect, onQuerySubmit }) => {
  const categories = [
    {
      id: 'security',
      title: 'Security',
      icon: ShieldCheckIcon,
      color: '#10B981',
      description: 'Explore encryption, compliance, and threat protection',
      topics: [
        'How does LinuxONE ensure data security?',
        'What encryption features are available?',
        'Secure container implementation',
        'Compliance and regulatory features'
      ]
    },
    {
      id: 'performance',
      title: 'Performance',
      icon: BoltIcon,
      color: '#F59E0B',
      description: 'Learn about optimization and benchmarks',
      topics: [
        'Performance optimization techniques',
        'Workload performance benchmarks',
        'Resource utilization best practices',
        'Scaling strategies'
      ]
    },
    {
      id: 'ai',
      title: 'AI Workloads',
      icon: CpuChipIcon,
      color: '#E07A2A',
      description: 'Discover AI frameworks and deployment strategies',
      topics: [
        'Supported AI frameworks',
        'Deploying AI models on LinuxONE',
        'AI workload optimization',
        'Machine learning best practices'
      ]
    },
    {
      id: 'architecture',
      title: 'Architecture',
      icon: ServerIcon,
      color: '#6366F1',
      description: 'Understand system design and components',
      topics: [
        'LinuxONE system architecture',
        'Hardware capabilities',
        'System design principles',
        'Infrastructure planning'
      ]
    },
    {
      id: 'virtualization',
      title: 'Virtualization',
      icon: CubeIcon,
      color: '#8B5CF6',
      description: 'Master containers and virtual machines',
      topics: [
        'Container orchestration with Kubernetes',
        'Virtual machine management',
        'Containerization benefits',
        'Hybrid cloud strategies'
      ]
    }
  ];

  const handleTopicClick = (topic) => {
    if (onQuerySubmit) {
      onQuerySubmit(topic, null);
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: 'text.primary',
            fontWeight: 600,
            mb: 1,
          }}
        >
          Explore LinuxONE Knowledge
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          Browse curated topics and discover insights about LinuxONE capabilities
        </Typography>
      </Box>

      {/* Category Grid */}
      <Grid container spacing={3}>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Grid item xs={12} md={6} key={category.id}>
              <Card
                elevation={1}
                sx={{
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '14px',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    borderColor: category.color,
                    boxShadow: `0 8px 24px ${category.color}20`,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Category Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        backgroundColor: `${category.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComponent style={{ width: 24, height: 24, color: category.color }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 0.5,
                        }}
                      >
                        {category.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.875rem',
                        }}
                      >
                        {category.description}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Topic Chips */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {category.topics.map((topic, index) => (
                      <Chip
                        key={index}
                        label={topic}
                        onClick={() => handleTopicClick(topic)}
                        sx={{
                          cursor: 'pointer',
                          justifyContent: 'flex-start',
                          height: 'auto',
                          py: 1,
                          px: 1.5,
                          backgroundColor: '#FAFAFA',
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: '8px',
                          fontSize: '0.8125rem',
                          fontWeight: 400,
                          color: 'text.secondary',
                          transition: 'all 0.2s ease-in-out',
                          '& .MuiChip-label': {
                            whiteSpace: 'normal',
                            textAlign: 'left',
                          },
                          '&:hover': {
                            backgroundColor: `${category.color}10`,
                            borderColor: category.color,
                            color: category.color,
                            transform: 'translateX(4px)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ExplorePage;

// Made with Bob