function doPost(e) {
    try {
      if (!e || !e.postData || !e.postData.contents) {
        throw new Error("No post data received. Make sure to send a POST request with a JSON body.");
      }
      
      // Improved logging to see exactly what's in the request
      Logger.log("Raw post data: " + e.postData.contents);
      
      const data = JSON.parse(e.postData.contents);
      Logger.log("Parsed data: " + JSON.stringify(data));
      
      // Log specific fields from second form page to verify they exist
      Logger.log("Second page fields: " + 
        JSON.stringify({
          budget: data.budget,
          dietaryRequirements: data.dietaryRequirements,
          guestCount: data.guestCount,
          preferredContactMethod: data.preferredContactMethod,
          venue: data.venue,
          additionalServices: data.additionalServices
        })
      );
      
      // Your existing functions
      appendToSheet(data);
      createCalendarEvent(data);
      sendConfirmationEmail(data);
      
      // Return success response
      return ContentService.createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
    } catch (error) {
      Logger.log("Error in doPost: " + error.toString());
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  // Fix: Keep only one doOptions function
  function doOptions(e) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    
    return ContentService.createTextOutput('')
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders(headers);
  }
  
  function appendToSheet(data) {
    try {
      Logger.log("Starting appendToSheet with data: " + JSON.stringify(data));
      
      // Get the spreadsheet
      const spreadsheetId = '1d1Jxsfrcawis-hOKr9HKQlV7jZqxRGRgDp10kQAovdY';
      const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
      
      // Add data to sheet with all fields
      sheet.appendRow([
        new Date(), // Timestamp
        data.name || '',
        data.email || '',
        data.phone || '',
        data.eventType || '',
        data.date || '',
        data.message || '',
        data.additionalServices || '',
        data.budget || '',
        data.dietaryRequirements || '',
        data.guestCount || '',
        data.preferredContactMethod || '',
        data.venue || ''
      ]);
      
      Logger.log("Successfully appended to sheet");
    } catch (error) {
      Logger.log("Error in appendToSheet: " + error.toString());
      throw error;
    }
  }
  
  function createCalendarEvent(data) {
    try {
      Logger.log("Starting createCalendarEvent with data: " + JSON.stringify(data));
      
      const calendar = CalendarApp.getDefaultCalendar();
      
      let title = `Event Inquiry: ${data.eventType || 'Unknown'} - ${data.name || 'Unknown'}`;
      let description = `Contact: ${data.name || 'N/A'}\nEmail: ${data.email || 'N/A'}\nPhone: ${data.phone || 'N/A'}\nMessage: ${data.message || 'N/A'}`;
      
      if (data.date && data.date !== "") {
        let eventDate = new Date(data.date);
        calendar.createEvent(title, eventDate, new Date(eventDate.getTime() + 60*60*1000), {
          description: description
        });
      } else {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        calendar.createAllDayEvent(`Follow up: ${title}`, tomorrow, {
          description: description
        });
      }
      
      Logger.log("Successfully created calendar event");
    } catch (error) {
      Logger.log("Error in createCalendarEvent: " + error.toString());
      throw error;
    }
  }
  
  function sendConfirmationEmail(data) {
    try {
      Logger.log("Starting sendConfirmationEmail with data: " + JSON.stringify(data));
      
      const subject = "Thank you for contacting Hewan's Events";
      const body = `
        Dear ${data.name || 'Valued Customer'},
        
        Thank you for contacting Hewan's Events. We have received your inquiry and will get back to you as soon as possible.
        
        Here's a summary of the information you provided:
        
        Name: ${data.name || 'N/A'}
        Email: ${data.email || 'N/A'}
        Phone: ${data.phone || 'N/A'}
        Event Type: ${data.eventType || 'N/A'}
        Event Date: ${data.date || 'Not specified'}
        Budget: ${data.budget || 'N/A'}
        Dietary Requirements: ${data.dietaryRequirements || 'N/A'}
        Guest Count: ${data.guestCount || 'N/A'}
        Preferred Contact Method: ${data.preferredContactMethod || 'N/A'}
        Venue: ${data.venue || 'N/A'}
        Additional Services: ${data.additionalServices || 'N/A'}
        
        Your message:
        ${data.message || 'N/A'}
        
        We look forward to planning your special event!
        
        Best regards,
        Hewan's Events Team
      `;
      
      // Send to the user
      MailApp.sendEmail(data.email, subject, body);
      
      // Send notification to yourself
      MailApp.sendEmail({
        to: "robelamare20@gmail.com", // Replace with your email
        subject: `New Form Submission: ${data.eventType || 'Unknown'} from ${data.name || 'Unknown'}`,
        body: `
          New form submission:
          
          Name: ${data.name || 'N/A'}
          Email: ${data.email || 'N/A'}
          Phone: ${data.phone || 'N/A'}
          Event Type: ${data.eventType || 'N/A'}
          Event Date: ${data.date || 'Not specified'}
          Budget: ${data.budget || 'N/A'}
          Dietary Requirements: ${data.dietaryRequirements || 'N/A'}
          Guest Count: ${data.guestCount || 'N/A'}
          Preferred Contact Method: ${data.preferredContactMethod || 'N/A'}
          Venue: ${data.venue || 'N/A'}
          Additional Services: ${data.additionalServices || 'N/A'}
          
          Message:
          ${data.message || 'N/A'}
        `
      });
      
      Logger.log("Successfully sent confirmation emails");
    } catch (error) {
      Logger.log("Error in sendConfirmationEmail: " + error.toString());
      throw error;
    }
  }