import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const FollowUpSuggestions = ({ suggestions, onSuggestionClick, loading }) => {
  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        mt: 3,
        p: 2.5,
        backgroundColor: '#FEF3E7',
        borderRadius: '12px',
        border: '1px solid #F2A863',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <LightBulbIcon style={{ width: 18, height: 18, color: '#E07A2A' }} />
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: '#B85F1F',
            fontSize: '0.875rem',
          }}
        >
          Continue exploring
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {suggestions.map((suggestion, index) => (
          <Chip
            key={index}
            label={suggestion}
            onClick={() => onSuggestionClick && onSuggestionClick(suggestion)}
            disabled={loading}
            sx={{
              cursor: 'pointer',
              backgroundColor: 'white',
              border: '1px solid #F2A863',
              borderRadius: '999px',
              color: '#B85F1F',
              fontSize: '0.8125rem',
              fontWeight: 500,
              height: '32px',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#E07A2A',
                color: 'white',
                borderColor: '#E07A2A',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(224, 122, 42, 0.2)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
              '&.Mui-disabled': {
                opacity: 0.5,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FollowUpSuggestions;

// Made with Bob