export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      CoinType: {
        Row: {
          coinid: number | null
          CoinID: number
          CoinName: string | null
          createAt: string | null
        }
        Insert: {
          coinid?: number | null
          CoinID?: number
          CoinName?: string | null
          createAt?: string | null
        }
        Update: {
          coinid?: number | null
          CoinID?: number
          CoinName?: string | null
          createAt?: string | null
        }
        Relationships: []
      }
      Players: {
        Row: {
          coinID: number | null
          createdAt: string | null
          overall: string | null
          playerID: number
          playerName: string | null
          playerSurname: string | null
          position: string | null
          teamID: number | null
        }
        Insert: {
          coinID?: number | null
          createdAt?: string | null
          overall?: string | null
          playerID?: number
          playerName?: string | null
          playerSurname?: string | null
          position?: string | null
          teamID?: number | null
        }
        Update: {
          coinID?: number | null
          createdAt?: string | null
          overall?: string | null
          playerID?: number
          playerName?: string | null
          playerSurname?: string | null
          position?: string | null
          teamID?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Players_coinID_fkey"
            columns: ["coinID"]
            isOneToOne: false
            referencedRelation: "CoinType"
            referencedColumns: ["CoinID"]
          },
          {
            foreignKeyName: "Players_teamID_fkey"
            columns: ["teamID"]
            isOneToOne: false
            referencedRelation: "Teams"
            referencedColumns: ["teamID"]
          }
        ]
      }
      Players_UserTeams: {
        Row: {
          createdAt: string | null
          playerID: number | null
          PlayersUserID: number
          userTeamID: number | null
        }
        Insert: {
          createdAt?: string | null
          playerID?: number | null
          PlayersUserID?: number
          userTeamID?: number | null
        }
        Update: {
          createdAt?: string | null
          playerID?: number | null
          PlayersUserID?: number
          userTeamID?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Players_UserTeams_playerID_fkey"
            columns: ["playerID"]
            isOneToOne: false
            referencedRelation: "Players"
            referencedColumns: ["playerID"]
          },
          {
            foreignKeyName: "Players_UserTeams_userTeamID_fkey"
            columns: ["userTeamID"]
            isOneToOne: false
            referencedRelation: "UserTeams"
            referencedColumns: ["userTeamID"]
          }
        ]
      }
      Teams: {
        Row: {
          createdAt: string | null
          teamID: number
          teamName: string | null
        }
        Insert: {
          createdAt?: string | null
          teamID?: number
          teamName?: string | null
        }
        Update: {
          createdAt?: string | null
          teamID?: number
          teamName?: string | null
        }
        Relationships: []
      }
      UserTeams: {
        Row: {
          createAt: string | null
          userID: string | null
          userTeamID: number
          userTeamName: string | null
        }
        Insert: {
          createAt?: string | null
          userID?: string | null
          userTeamID?: number
          userTeamName?: string | null
        }
        Update: {
          createAt?: string | null
          userID?: string | null
          userTeamID?: number
          userTeamName?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
