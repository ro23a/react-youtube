import React from 'react'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import { Stack, Box } from "@mui/material";

const Videos = ({ videos, direction }) => {
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    {videos.map((item, idx) => (
      <Box key={idx}>
        {item.id.videoId && <VideoCard video={item} /> }
        {item.id.channelId && <ChannelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>
);
}


export default Videos