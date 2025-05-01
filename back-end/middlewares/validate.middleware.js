// export const validate = (schema) => (req, res, next) => {
//     try {
//       const { error } = schema.validate(req.body, { abortEarly: false });
//       if (error) {
//         const messages = error.details.map(err => err.message);
//         return res.status(400).json({ message: messages.join(', ') });
//       }
//       next();
//     } catch (err) {
//       return res.status(500).json({ message: 'Erreur de validation', details: err.message });
//     }
//   };