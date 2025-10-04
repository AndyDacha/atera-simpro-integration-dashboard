# Railway Deployment Guide

## Prerequisites

1. Railway account with project access
2. Environment variables configured
3. Domain/URL for the dashboard

## Environment Variables

Set these in your Railway project settings:

```
DASHBOARD_PASSWORD=YourSecurePasswordHere
SESSION_SECRET=your-session-secret-key-here
NODE_ENV=production
PORT=3000
```

## Deployment Steps

1. **Connect Repository**
   - Link your GitHub repository to Railway
   - Select the `integration-dashboard` folder as the root

2. **Configure Environment**
   - Set the environment variables listed above
   - Ensure `NODE_ENV=production`

3. **Deploy**
   - Railway will automatically build and deploy
   - The build process will:
     - Install Node.js dependencies
     - Build the React client
     - Start the Express server

4. **Access Dashboard**
   - Visit your Railway deployment URL
   - Use the password set in `DASHBOARD_PASSWORD`
   - Default password: `DachaSSI2024!`

## Security Notes

- Change the default password in production
- Use a strong, unique `SESSION_SECRET`
- Railway automatically provides HTTPS
- Rate limiting is enabled (100 requests per 15 minutes)

## Monitoring

- Check Railway logs for any issues
- Monitor the `/api/auth-status` endpoint for health checks
- The dashboard shows real-time integration status

## Troubleshooting

- **Build fails**: Check that all dependencies are in `package.json`
- **Login issues**: Verify `DASHBOARD_PASSWORD` is set correctly
- **Session issues**: Ensure `SESSION_SECRET` is set and unique
- **CORS errors**: Check that the frontend is being served correctly

## Updates

To update the dashboard:
1. Push changes to the repository
2. Railway will automatically redeploy
3. No manual intervention required
