import React from 'react'

const Videos = ({ videos }) => {
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
  )
}

export default Videos