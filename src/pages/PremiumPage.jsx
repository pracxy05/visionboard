import React from "react";
import { Box, Typography, Grid, Paper, Button, Divider, TextField } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import QrCodeIcon from '@mui/icons-material/QrCode';
import StarIcon from '@mui/icons-material/Star';

function PremiumPage() {
  return (
    <Box sx={{ mx: 'auto', maxWidth: 540 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          mt: 4,
          bgcolor: "background.paper",
          boxShadow: "0 4px 20px #39FF1422"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
          <StarIcon fontSize="large" sx={{ color: "#39FF14", mr: 1 }} />
          <Typography variant="h5" fontWeight="bold">Go Premium</Typography>
        </Box>

        <Typography variant="subtitle1" align="center" mb={2}>
          Unlock advanced features, custom automation, and priority support!
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" mb={2}>Choose Your Payment Method</Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<AccountBalanceWalletIcon />}
              sx={{ mb: 2 }}
            >
              UPI ID / App Intent
            </Button>
            <Button fullWidth variant="outlined" startIcon={<QrCodeIcon />} sx={{ mb: 2 }}>
              Scan UPI QR
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<CreditCardIcon />}
              sx={{ mb: 2 }}
            >
              Credit / Debit Card
            </Button>
            <Button fullWidth variant="outlined" startIcon={<AccountBalanceWalletIcon />} sx={{ mb: 2 }}>
              UPI AutoPay Subscription
            </Button>
          </Grid>
        </Grid>

        {/* For demo, show simple input */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" mb={1}>Enter UPI ID</Typography>
        <TextField variant="outlined" fullWidth placeholder="yourupi@bank" sx={{ mb: 2 }} />
        <Button variant="contained" sx={{ bgcolor: "#39FF14", color: "#222", fontWeight: "bold", fontSize: 18 }} fullWidth>
          Pay Now
        </Button>
      </Paper>
    </Box>
  );
}

export default PremiumPage;
