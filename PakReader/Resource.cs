namespace PakReader;

public class InvalidFormatException : Exception
{
    public InvalidFormatException(string message)
        : base(message)
    {
    }
}
