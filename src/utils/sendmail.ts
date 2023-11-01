import { FormData } from "../components/contact-form";

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // If the response status is within the range 200-299, it means success
      const responseData = await response.json();
      console.log('Email sent successfully:', responseData.status);
      return { success: true, status: responseData.status };
    } else {
      // If the response status is outside the range 200-299, it means there was an error
      console.error('Email sending failed:', response.status);
      return { success: false, status: response.status };
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Error occurred while sending email:', error);
    return { success: false, status: 'Error occurred while sending email' };
  }
}
